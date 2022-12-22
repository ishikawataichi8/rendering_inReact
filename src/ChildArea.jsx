import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//コンポーネントをmemo()関数で囲うことで親要素が再レンダリングされても再レンダリングしないようになる
//→textが入力されたときは再レンダリングされずに済むようになる
//しかしmemo化しても親要素で際レンダリングが起こり関数onClickCloseにアロー関数setOpen()が代入されるたびに関数onClickCloseに新たな関数が代入されているとみなされてしまい子コンポーネントが再レンダリングされてしまう。
//つまりtextに値が入力されても再レンダリングされるようになってしまっている。
//関数でなく、変数ならばset関数で値が更新されない限り再レンダリングは起こらない
//関数が再レンダリングされてしまう時にはuseCallbackを利用する
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;

  //表示ボタンが押されたときだけでなく、textが入力された時にもレンダリングされてしまう
  //→Memoを使う
  console.log("ChildAreaがレンダリングされた");
  return (
    <>
      {/* 三項演算子 */}
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
