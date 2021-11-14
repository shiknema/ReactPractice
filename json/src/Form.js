import React from "react";
const registerUrl= "http://localhost:5000/User";
// 33333 read Json data through JSON.Server 
// Go throw the directory structure where Json file stored then
// *** json-server --watch User.json --port 5000 ***

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        {/** 22222. Bind input data(name,email,..) with event methods(handleChangeName,handleChangeEmail) */}
        // data binding define inside constructor
        //Whatever user type at browser it bind thatr data with .bind(this) 

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChageEmail = this.handleChageEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this); 

    }
    //event handling method define oulside the constructor
    handleChangeName(event) {
        this.setState({ name: event.target.value })
    }

    handleChageEmail(event){
        this.setState({email: event.target.value})
    }

    handleChangeMessage(event){
        this.setState({message: event.target.value})
    }

    handleRegister =(event) =>{
     var data={
         "name" :this.state.name,
         "email" : this.state.email,
         "message" : this.state.message
     }
     console.log("the registered data is = " , data);
    
     //** 44444... POST data into JSON Server */}
     
     fetch(registerUrl,{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(data) // conert data into JSON format
     })

     .then(console.log("Successful post data"))
     //.then(this.proprs.history.push(/login))
    }

    render() {
        return (
            <div> 
                {/** 11111. Create basic Form and event and method for bind data */}
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Registration Form
                    </div>

                    <div className="panel-body">
                        <div className="form-group">
                            <label > Name: </label>
                            <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChangeName} />
                        </div>

                        <div className="form-group">
                            <label> Email Address:</label>
                            <input type="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChageEmail}></input>
                        </div>

                        <div className="form-group">
                            <label> Message:</label>
                            <input type="text" placeholder="Type your message" value={this.state.message} onChange={this.handleChangeMessage}></input>
                        </div>
                        <button type="button" className="btn btn-success" onClick={this.handleRegister}> Register</button>
                    </div>
                </div>

            </div>
        )

    }
}
export default Form;