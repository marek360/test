class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;

  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Something {this.state.username} {this.state.age}</h1>
      <p>Your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Your comments:</p>
      <input
        type='text'
        text='text'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('app'));

-------------------------------------------------------------------------


class App extends React.Component {
  state = {
      Your name: "Mathieu",
      Your comment: "Lavisse",
  }

  handleLastname() {
      console.log("coucou");
  }

  render() {
      return (
           <form>
               <label>
                  Nom
                  <input type="text" name="lastname" id="" 
                  placeholder="Entrez votre nom" 
                  value={this.state.lastname} onChange={this.handleLastname} />
               </label>
               <label>
                 Comment
                  <input type="text" name="text" id="" 
                  placeholder="Your comment" 
                  value={this.state.age} />
               </label>
               <input type="submit" value="Envoyer"/>
           </form>
      );
  }
}

ReactDOM.render(<App/>,document.getElementById("app"));
