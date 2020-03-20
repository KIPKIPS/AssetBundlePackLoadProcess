using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;

public class CreateAssetBundle {
    [MenuItem("Assets/BuildAssetBundles")]
    // Start is called before the first frame update
    static void BuildAllAssetBundles() {
        BuildPipeline.BuildAssetBundles(Application.streamingAssetsPath, BuildAssetBundleOptions.UncompressedAssetBundle, BuildTarget.StandaloneWindows64);
    }
}
