using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LoadAssetBundlesFromFile : MonoBehaviour {
    public string assetName;
    // Start is called before the first frame update
    void Start() {
        string[] path = assetName.Split('/');
        //获取路径
        string url = Application.streamingAssetsPath +"/"+ path[0] + "/" + path[1].ToLower() + ".assetbundle";
        Debug.Log(url);
        //加载路径下的资源
        AssetBundle assetBundle = AssetBundle.LoadFromFile(url);
        GameObject[] gos=assetBundle.LoadAllAssets<GameObject>();
        foreach (GameObject go in gos) {
            Instantiate(go);//实例化对象
        }
    }

    // Update is called once per frame
    void Update() {

    }
}
