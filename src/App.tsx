import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
// import "./styles.css";

import { Article } from "./component/Article";
import { AddArticle } from "./component/AddArticle";
import { addArticle, removeArticle } from "./store/actionCreator";
import { Dispatch } from "redux";
import { LiveShow } from "./component/livezshow";

const App: React.FC = () => {
  React.useEffect(() => {
    const items = document.querySelectorAll(".item"),
      controls = document.querySelectorAll(".control"),
      headerItems = document.querySelectorAll(".item-header"),
      descriptionItems = document.querySelectorAll(".item-description"),
      activeDelay = 0.76,
      interval = 5000;

    let current = 0;

    const slider = {
      init: () => {
        controls.forEach((control) =>
          control.addEventListener("click", (e) => {
            slider.clickedControl(e);
          })
        );
        controls[current].classList.add("active");
        items[current].classList.add("active");
      },
      nextSlide: () => {
        // Increment current slide and add active class
        slider.reset();
        if (current === items.length - 1) current = -1; // Check if current slide is last in array
        current++;
        controls[current].classList.add("active");
        items[current].classList.add("active");
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
      },
      clickedControl: (e: any) => {
        // Add active class to clicked control and corresponding slide
        slider.reset();
        clearInterval(intervalF);

        const control = e.target,
          dataIndex = Number(control.dataset.index);

        control.classList.add("active");
        items.forEach((item, index) => {
          if (index === dataIndex) {
            // Add active class to corresponding slide
            item.classList.add("active");
          }
        });
        current = dataIndex; // Update current slide
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
        intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
      },
      reset: () => {
        // Remove active classes
        items.forEach((item) => item.classList.remove("active"));
        controls.forEach((control) => control.classList.remove("active"));
      },
      transitionDelay: (items: any) => {
        // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
        let seconds = 0;

        items.forEach((item: any) => {
          const children = item.childNodes; // .vertical-part(s)
          let count = 1,
            delay;

          item.classList.value === "item-header"
            ? (seconds = 0.015)
            : (seconds = 0.007);

          children.forEach((child: any) => {
            // iterate through .vertical-part(s) and style b element
            if (child.classList) {
              item.parentNode.classList.contains("active")
                ? (delay = count * seconds + activeDelay)
                : (delay = count * seconds);
              child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
              count++;
            }
          });
        });
      },
    };

    let intervalF = setInterval(slider.nextSlide, interval);
    slider.init();
  }, []);
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      {/* <h1>My Articles</h1> */}
      <LiveShow></LiveShow>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};

export default App;
