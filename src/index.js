import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // TODOリストのひな形DOMを生成
  const todoRecord = createTodoRecord(inputText);

  


  
    // 要素を組み立てる
    divRow.appendChild(p);
    divRow.appendChild(backButton);
    completeTarget.appendChild(divRow);

    // 完了したTODOに追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  //DOM構築
  //div.appendChild(completeButton);
  //div.appendChild(deleteButton);

  //未完了リストに追加
  //document.getElementById("imcomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// 未完了TODOリストに追加する
const insertIncompleteList = (todoText) => {};


// TODOテキストのDOM要素を生成する
const createTodoRecord = (todoText) => {
  //liタグ生成
  const li = document.createElement("li");
  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";
  //pタグ生成
  const p = document.createElement("p");
  p.innerText = todoText;
  //DOM組み立て
  div.appendChild(p);
  li.appendChild(div);

  return li;
};

// 未完了リストにTODO要素を追加する
const createImcompleteTodo = (todoRecord) => {
  //button生成(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // TODOの内容を取得
    const todoText = completeButton.parentNode.parentNode.firstElementChild.innerText;
    // 押された完了ボタンの行を未完了リストから消す
    deleteFromCompleteList(completeButton.parentNode.parentNode);
    //完了リストに表示するTODOテキストのDOM要素を生成する
    const todoRecordForCompleteList = createTodoRecord(todoText);
  });

  //button生成(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を削除する
    deleteFromCompleteList(deleteButton.parentNode.parentNode);
  });
};

// 未完了リストからタスクを削除する
const deleteFromCompleteList = (deleteTarget) => {
  document.getElementById("imcomplete-list").removeChild(deleteTarget);
}

// 完了リストにTODO要素を追加する
const createCompleteList = (todoRecord) => {
  // 戻すボタンを生成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    // 完了TODOリストから削除する
    const backTodo = backButton.parentNode.parentNode;
    const backTodoText =
      backTodo.firstElementChild.firstElementChild.innerText;
    document.getElementById("complete-list").removeChild(backTodo);
    // 未完了TODOに追加する
  };
  //戻すボタンをtodoRecordに追加する
  todoRecord.firstElementChild.appendChild(backButton); 
};
