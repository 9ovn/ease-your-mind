import { Fragment } from "react";

// Fragment 用来解决jsx只能返回一个元素(一个元素指的是一个父元素)
// 当然我们可以使用div块包裹一下整个元素集合，但是会多个div
// 这里使用Fragment来
function List(params: any) {
  let item: string[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];
  item = [];
  const getMsg: string | null = () => {
    return item.length === 0 ? <p>no content to show</p> : null;
  };
  return (
    <Fragment>
      <h1>List showing</h1>
      {getMsg()}
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {item.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default List;
