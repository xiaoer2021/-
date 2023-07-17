console.log("铠甲合体~");
// 创建右键菜单选项
chrome.contextMenus.create({
    id: "xiaoer_cloud_baike",
    title: "热词翻译&百科",
    contexts: ["selection"]
  });
  
  // 监听右键菜单点击事件
  chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId === "xiaoer_cloud_baike") {
      // 获取选中的文本
      var selectedText = info.selectionText;
      // console.log(selectedText)
      // 发送消息给 content script
      chrome.tabs.query({active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "showInterpretations", word: selectedText});
      });
    }
  });