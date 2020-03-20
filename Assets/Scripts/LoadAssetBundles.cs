using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

public class LoadAssetBundles : MonoBehaviour {
    public string url;

    public string assetName;
    // Start is called before the first frame update
    IEnumerator Start() {
        //清理非托管资源 不受GC控制的资源 Using结束后会隐式的调用Disposable方法
        //using里面的对象必须继承实现IDisposable接口
        using (WWW www = new WWW(url)) {
            yield return www;
            if (www.error != null) {
                Debug.Log("网络错误!");
            }
            //下载完成
            else {
                AssetBundle bundle = www.assetBundle;
                GameObject go = bundle.LoadAsset<GameObject>(assetName);
                Instantiate(go);//加载资源
                //bundle使用完成后就可以卸载掉
                //bundle.Unload(true);//true卸载全部 false卸载加载过的资源
            }
        }
        //释放连接
        //www.Dispose();

    }

    // Update is called once per frame
    void Update() {

    }
}
