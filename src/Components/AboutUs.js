import UserClass from "./UserCardClass";
import { Component } from "react";
import UserrContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("constructor of parent called ");
  }

  async componentDidMount() {
    // console.log("parent compoenent did mount");
  }
  render() {
    // console.log("render method of parent called ");
    // const {name,location} = this.state.userInfo;
    return (
      <>
        <div>
          <div>
            <h1 className="font-bold flex justify-center pt-4 text-3xl">
              Welcome to About Us Page{" "}
            </h1>
            <p className="mx-10 mt-3">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
              Contrary to popular belief,<br></br>
              <br></br> Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32.
            </p>

            <UserrContext.Consumer>
              {({ loggedInUser }) => (
                <h1 className="font-bold flex justify-center mt-4">
                  LoggedIn User is :- {loggedInUser}
                </h1>
              )}
            </UserrContext.Consumer>
            <p className="flex justify-center pt-3">
              " Click the button in the header to change the user "
            </p>
          </div>

          {/* <UserrContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserrContext.Consumer> */}

          {/* <UserCardBro name={"Rohit Kadam (function)"}/> */}
          {/* <UserClass name={name} location={location} /> */}
        </div>
      </>
    );
  }
}

export default About;
