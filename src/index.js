import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // TODOリストのひな形DOMを生成
  const todoRecord = createTodoRecord(inputText);

  //button生成(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加するために完了対象を取得
    const completeTarget = completeButton.parentNode.parentNode;
    // div(list-row)の要素を取得
    const divRow = completeTarget.firstChild;
    // TODOの内容を取得
    const todoText = divRow.firstElementChild.innerText;

    // 押された完了ボタンの行を未完了リストから消す
    deleteFromCompleteList(completeTarget);

    // div(list-row)の子要素を初期化
    divRow.textContent = null;
    // 完了したTODOに表示するための子要素を生成
    const p = document.createElement("p");
    p.innerText = todoText;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 完了TODOリストから削除する
      const backTodo = backButton.parentNode.parentNode;
      const backTodoText =
        backTodo.firstElementChild.firstElementChild.innerText;
      document.getElementById("complete-list").removeChild(backTodo);
      // 未完了TODOに追加する
    });

    // 要素を組み立てる
    divRow.appendChild(p);
    divRow.appendChild(backButton);
    completeTarget.appendChild(divRow);

    // 完了したTODOに追加
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

// 未完了リストからタスクを削除する
const deleteFromCompleteList = (deleteTarget) => {
  document.getElementById("imcomplete-list").removeChild(deleteTarget);
};

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
