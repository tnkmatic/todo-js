import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグ生成
  const li = document.createElement("li");
  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";
  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button生成(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する
    const completeTarget = completeButton.parentNode.parentNode;
    const divRow = completeTarget.firstChild;

    // div(list-row)の内容について完了・削除ボタンを削除する
    const todoContents = divRow.childNodes;
    for (let i = 1; i < todoContents.length; i++) {
      //TODO ここがエラーする
      divRow.removeChild(divRow.removeChild(todoContents.item(i)));
    }
    console.log(divRow);

    // 押された完了ボタンの行を未完了リストから消す
    deleteFromCompleteList(completeTarget);
    document.getElementById("complete-list").appendChild(completeTarget);
  });
  //button生成(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を削除する
    deleteFromCompleteList(deleteButton.parentNode.parentNode);
  });

  //DOM構築
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// 未完了リストからタスクを削除する
const deleteFromCompleteList = (deleteTarget) => {
  document.getElementById("imcomplete-list").removeChild(deleteTarget);
};
