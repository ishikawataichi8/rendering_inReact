import { useCallback, useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

//再レンダリングの条件(デフォルト)
//state(変数)が変更されたらそのコンポーネントが再レンダリングされる(1)
//propが変更されたらそのコンポーネントが再レンダリングされる(2)
//再レンダリングされたコンポーネントの子要素であるコンポーネントは全て再レンダリングされる(3)

//(3)を実行しないためにはMemoを使う
export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  //useCallbackを使うことで 第二引数openが変わった時のみ関数を再生成する(再レンダリングする)
  //また、第二引数が空の時には、最初の一回のみ関数が生成される
  const onClickClose = useCallback(() => setOpen(false), [open]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
