import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'
import Editmodel from './Editmodel';
import Update from './update';
import { connect } from 'react-redux';
import { add_post,delete_post,update_post } from '../Redux/actions/action';


class Second extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data:[],
            newvalue:"",
            postes:null,
            isVisibleModel:false
           
        }
        this.addpost = this.addpost.bind(this);
        this.getdata = this.getdata.bind(this);
        this.Update = this.Update.bind(this);
       this.isOpen = this.isOpen.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.isClose = this.isClose.bind(this);

    }
   
    getdata(val)
    {
        console.log("data")
        this.setState({newvalue:val.target.value});
    }
    addpost()
    {
        console.log("datajjjjj")
        const count = this.props.data.length;
        let post = {};
        post.title = this.state.newvalue;
        post.id = count + 1; //namkarn yaha huwa ha
        console.log(777,post);
        // let a = this.state.data;
        //  a.push(post);
        // this.setState({data:a});
        this.props.add_post(post);
    }
     

    deleteData(id)
    {

        // this.setState({data:obj}); 
        this.props.delete_post(id);   
        // console.log(val);       
    }

    Update(val,ids)
    {
    
      this.props.update_post(val,ids);
    } 
    isOpen(id)
     {
   let a = this.props.data.find((val)=>val.id == id)
   this.setState({postes:a});
     this.setState({isVisibleModel:true});
     }
     
     isClose()
     {
  
     this.setState({isVisibleModel:false});
     }

  
  render() {
    return (
      <div>
          <input type="text" onChange={this.getdata} />
          &nbsp;
          <button onClick={this.addpost}>add posts</button>
          {this.props.data.map((val,index)=>{
            return (
            <div key={index}> 
           
                 <Update data={val} deleteData = {this.deleteData} isOpen ={this.isOpen} Update = {this.Update}  />
                
              </div>)
            })}
               
             {this.state.isVisibleModel?
           
           <Editmodel isVisibleModel={this.state.isVisibleModel } postes = {this.state.postes} isClose ={this.isClose} Update = {this.Update} />: ""
            } 
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(4444444, state)
  return {
    data : state.Post_reducer.posts
   
  };
};
const mapDispatchToProps = {
  add_post,
  delete_post,
  update_post
};
export default connect(mapStateToProps, mapDispatchToProps )(Second);
    //it will connect and send to the action