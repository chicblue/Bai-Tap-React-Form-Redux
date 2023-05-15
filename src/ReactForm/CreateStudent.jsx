import React, { Component } from 'react'
 import {connect} from 'react-redux'
 import{studentInput} from '../redux/reducers/studentReducer'
 import {addStudent} from '../redux/reducers/infoReducer'
 import {studentUpdate}from '../redux/reducers/infoReducer'
class CreateStudent extends Component {
   
    handleSubmit = (e)=>{
        e.preventDefault();
        let info = this.props.studentReducer.values
        let errors =this.props.studentReducer.errors
        for(let key in errors){
            if(errors[key]!==''){
                alert('Không Hợp Lệ!')
                return;
            }
        }


        const action = addStudent(info)
        this.props.dispatch(action);
        
    }
    handleChangeInput = (e)=>{
        let {id,value} = e.target;
        let dataType = e.target.getAttribute('data-type')
        const action = studentInput({id,value,dataType})
        this.props.dispatch(action);
    }

    updateStudent =(stud)=>{
        const action = studentUpdate(stud);
        this.props.dispatch(action);
    }

  render() {
    let student = this.props.studentReducer;
    let {idStudent, phone,name,email} = this.props.studentReducer.values
    
    return (
        
        <form className='card' onSubmit={this.handleSubmit}>
        <div className='card-header bg-dark text-white'>Thông Tin Sinh Viên</div>
        <div className='card-body'>
            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                        <p>Mã Sinh Viên</p>
                        <input data-type="number" className='form-control' id="idStudent" name="idStudent" onInput={this.handleChangeInput} value={idStudent} />
                        <p className='text text-danger'>{student.errors.idStudent}</p>
                    </div>
                    <div className='form-group'>
                        <p>Số Điện Thoại</p>
                        <input data-type="number" className='form-control' id="phone" name="phone" onInput={this.handleChangeInput} value={phone} />
                        <p className='text text-danger'>{student.errors.phone}</p>
                    </div>
                </div>
                  
                <div className='col-6'>
                <div className='form-group'>
                        <p>Tên Sinh Viên</p>
                        <input data-type="string" className='form-control' id="name" name="name" onInput={this.handleChangeInput}value={name} />
                        <p className='text text-danger'>{student.errors.name}</p>
                    </div>
                    <div className='form-group'>
                        <p>Email</p>
                        <input data-type="email" className='form-control' id="email" name="email" onInput={this.handleChangeInput} value={email} />
                        <p className='text text-danger'>{student.errors.email}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='card-footer'>
            <button className='btn btn-success' type='submit'>Thêm Sinh Viên</button>
            <button className='btn btn-success ms-2' type='button' onClick={()=>{
              this.updateStudent(this.props.studentReducer.values);
            }}>Cập Nhật</button>
        </div>
    </form>
    )
  }
}
const mapStateToProps = (state ) =>{
    return state ;
}
const  ComponentWithReDux = connect (mapStateToProps)(CreateStudent)
export default ComponentWithReDux;
