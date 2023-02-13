<script setup lang="ts">
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
// import VueUeditorWrap from "vue-ueditor-wrap";
// import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
let content = ref("");
let editorConfig = {
  serverUrl: "后端服务",
  // 配置UEditorPlus的惊天资源
  UEDITOR_HOME_URL: "/public/UEditorPlus/",
};

function ready() {
  console.log("ready");
}

/**
 * @description: 上传图片
 * @param {*}
 * @return {*}
 */
 function addCustomButton(editorId:string) {
  // @ts-ignore
      window.UE.registerUI(
        'my-custom-button',
        (editor:any, uiName:string) => {
          // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand() {
              editor.execCommand('inserthtml', `<span>这是一段由自定义按钮添加的文字</span>`);
            },
          });

          // 创建一个 button
          //@ts-ignore
          const btn = new window.UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: '鼠标悬停时的提示文字',
            // 需要添加的额外样式，可指定 icon 图标
            cssRules: `background-image: url('${editorConfig.UEDITOR_HOME_URL}themes/default/images/loaderror.png') !important; background-size: cover;`,
            // 点击时执行的命令
            onclick() {
              console.log(123)
              // 这里可以不用执行命令，做你自己的操作也可
              editor.execCommand(uiName);
            },
          });

          // 当点到编辑内容上时，按钮要做的状态反射
          editor.addListener('selectionchange', function () {
            const state = editor.queryCommandState(uiName);
            if (state === -1) {
              btn.setDisabled(true);
              btn.setChecked(false);
            } else {
              btn.setDisabled(false);
              btn.setChecked(state);
            }
          });

          // 因为你是添加 button，所以需要返回这个 button
          return btn;
        },
        0 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */,
        editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */
      );
    }
</script>

<template>
  <div>
    <el-row :gutter="20" style="width: 100%; height: 500px"> 1 </el-row>
    <el-row>
      <div style="border: 1px solid #ccc">
        <vue-ueditor-wrap
          @ready="ready"
          v-model="content"
          editor-id="editor1"
          :config="editorConfig"
          :editorDependencies="['ueditor.config.js', 'ueditor.all.js']"
          @beforeInit="addCustomButton"
        />
      </div>
    </el-row>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
