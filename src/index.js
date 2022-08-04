import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // TODOリストの雛型DOMを生成
  const todoRecord = createTodoRecord(inputText);
  console.log(todoRecord);
  //未完了リストのレコードを生成
  const InCompleteTodoRecord = createImcompleteTodoRecordRecord(todoRecord);

  // undefined 状態
  console.log(InCompleteTodoRecord);

  // 未完了リストに追加
  addImcompleteTodoList(InCompleteTodoRecord);
};

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
const createImcompleteTodoRecordRecord = (todoRecord) => {
  //button生成(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // TODOの内容を取得
    const todoText =
      completeButton.parentNode.parentNode.firstElementChild.innerText;
    // 押された完了ボタンの行を未完了リストから消す
    deleteFromImCompleteList(completeButton.parentNode.parentNode);
    //完了リストに表示するTODOテキストのDOM要素を生成する
    const todoRecordForCompleteList = createTodoRecord(todoText);
  });

  //button生成(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を削除する
    deleteFromImCompleteList(deleteButton.parentNode.parentNode);
  });
};

// 未完了リストからタスクを削除する
const deleteFromImCompleteList = (deleteTarget) => {
  document.getElementById("imcomplete-list").removeChild(deleteTarget);
};

// 未完了リストに未完了用のTODOレコードを追加する
const addImcompleteTodoList = (imcompleteTodo) => {
  const imcompleteList = document.getElementById("imcomplete-list");
  imcompleteList.appendChild(imcompleteTodo);
  return imcompleteList;
};

// 完了リストにTODO要素を追加する
const createCompleteList = (todoRecord) => {
  // 戻すボタンを生成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    // 完了TODOリストから削除する
    const backTodo = backButton.parentNode.parentNode;
    const backTodoText = backTodo.firstElementChild.firstElementChild.innerText;
    document.getElementById("complete-list").removeChild(backTodo);
    // 未完了TODOに追加する
  });
  //戻すボタンをtodoRecordに追加する
  todoRecord.firstElementChild.appendChild(backButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
