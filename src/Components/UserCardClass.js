import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("this is  ", this.props);
    // super(props)
    //    super(props);
    //    console.log("props is ", props);

    //    console.log("value is this " , this);
    console.log("props is ", props);

    this.state = {
      userInfo: {
        name: "DummyName",
        location: "Default",
      },
    };
    //    console.log("construnctor called of child " ,this.props.name);
  }

  async componentDidMount() {
    console.log("child compoenent did mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log("json is  ", json);

    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log("compnonent will uncmount called ");
  }

  componentDidUpdate() {
    console.log("compnenet updated ");
  }
  render() {
    console.log("render method called ", this.props);
    // const{count,count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <>
        {/* <UserClass name={"Fifth  Child (class) in child class "} location={"Bombay"}/> */}
        <div className="user-card">
          {/* {console.log()} */}
          {/* <h1>Count is: {count}</h1> */}
          {/* <h1>Count2 is: {count2}</h1> */}
          <img src={avatar_url} alt="img"></img>
          {/* <h2>Name: {name}</h2> */}
          <h2>Rohit Kadam</h2>
          {/* <button onClick={()=>{
                    this.setState({
                        count : this.state.count +1,
                        count2 : this.state.count2+2,
                    })
                }}>Increas count</button> */}
          <h2>Location: {location}</h2>
          <h4>Contact: @rohitKadamtwitter</h4>
        </div>
      </>
    );
  }
}

export default UserClass;
