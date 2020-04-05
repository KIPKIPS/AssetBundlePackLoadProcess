using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class LoadAssetBundlesWithDepend : MonoBehaviour {
    public string assetName;
    // Start is called before the first frame update
    void Start() {
        //获取路径
        string url = Application.streamingAssetsPath + "/" + assetName + ".assetbundle";
        //先加载依赖
        StreamReader reader=new StreamReader(url+".manifest");//读取包对应的manifest文件[目的是为了获取依赖]
        string line = "";
        while (reader.EndOfStream==false) {
            line= reader.ReadLine();
        }
        reader.Close();
        string dependPath = line.Substring(2);//获取依赖包的路径
        AssetBundle.LoadFromFile(dependPath);//加载依赖包的资源

        //加载路径下的资源
        AssetBundle assetBundle = AssetBundle.LoadFromFile(url);
        GameObject[] gos = assetBundle.LoadAllAssets<GameObject>();
        foreach (GameObject go in gos) {
            Instantiate(go);//实例化对象
        }
    }

    // Update is called once per frame
    void Update() {

    }
}
