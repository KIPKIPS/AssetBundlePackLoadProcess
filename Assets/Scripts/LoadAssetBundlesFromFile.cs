using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LoadAssetBundlesFromFile : MonoBehaviour {
    public string assetName;
    // Start is called before the first frame update
    void Start() {
        string[] path = assetName.Split('/');
        string url = Application.streamingAssetsPath +"/"+ path[0] + "/" + path[1].ToLower() + ".assetbundle";
        Debug.Log(url);
        AssetBundle assetBundle = AssetBundle.LoadFromFile(url);
        
        GameObject[] gos=assetBundle.LoadAllAssets<GameObject>();
        foreach (GameObject go in gos) {
            Instantiate(go);
        }
    }

    // Update is called once per frame
    void Update() {

    }
}
