// console.log("sd体~");
// 监听来自 background script 的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "showInterpretations") {
      // 在当前页面显示解释列表
      showInterpretations(request.selectedText);
    }
  });
  
  // 显示解释列表
  function showInterpretations(selectedText) {
    // 创建一个固定在页面上的容器
    var container = document.createElement("div");
    container.id = "interpretations-container";
    container.style.position = "fixed";
    container.style.top = "20px";
    container.style.right = "20px";
    container.style.zIndex = "9999";
    container.style.width = "300px";
    container.style.backgroundColor = "#ffffff";
    container.style.border = "1px solid #ccc";
    container.style.padding = "10px";
    
    // 添加关闭按钮
    var closeButton = document.createElement("button");
    closeButton.innerText = "关闭";
    closeButton.addEventListener("click", function() {
      container.remove();
    });
    container.appendChild(closeButton);
    // word = '123123'
    // 添加解释内容
    var interpretations = getInterpretations(selectedText); // 获取解释内容的函数，需要自行实现
    interpretations.forEach(function(interpretation) {
      var interpretationElement = document.createElement("div");
      interpretationElement.innerText = interpretation;
      container.appendChild(interpretationElement);
    });
    
    // 将容器添加到页面中
    document.body.appendChild(container);
  }
  
  // 获取解释内容的示例函数
  function getInterpretations(selectedText) {
    // 这里可以根据你的需求从网络或其他数据源获取解释内容
    // 这里只是一个示例，返回一个包含三个示意解释的数组
    return [
      "解释1：" + selectedText,
      "解释2：" + selectedText,
      "解释3：" + selectedText
    ];
  }