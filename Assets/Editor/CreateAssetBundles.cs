using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEditor.Experimental.GraphView;
using UnityEditor.VersionControl;
using UnityEngine;

public class CreateAssetBundles {
    [MenuItem("Assets/BuildAssetBundles")]
    // Start is called before the first frame update
    static void BuildAllAssetBundles() {
        string dir = @"Assets\StreamingAssets";
        if (Directory.Exists(dir)==false) {
            Directory.CreateDirectory(dir);
        }
        //BuildPipeline.BuildAssetBundles(Application.streamingAssetsPath, BuildAssetBundleOptions.UncompressedAssetBundle, BuildTarget.StandaloneWindows64);
        BuildPipeline.BuildAssetBundles(dir, BuildAssetBundleOptions.UncompressedAssetBundle, BuildTarget.StandaloneWindows64);
    }
}
