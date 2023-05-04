import { Fragment, MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelected: (item: string) => void;
}

// Fragment 用来解决jsx只能返回一个元素(一个元素指的是一个父元素)
// 当然我们可以使用div块包裹一下整个元素集合，但是会多个div
// 这里使用Fragment来
function List({ items, heading, onSelected }: Props) {
  const [selectedIndex, setselectedIndex] = useState(-1);
  let baseClsName =
    "w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-auto hover:bg-gray-100";
  let active = baseClsName + " animate-pulse bg-blue-500 text-white";

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no content to show</p>}
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? active : baseClsName}
            onClick={() => {
              setselectedIndex(index);
              onSelected(item);
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default List;
