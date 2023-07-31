import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function FoodList() {
    const navigate = useNavigate();
    const [foodLists, getFoods] = useState([]);
    useEffect(() => {  
        fetchFoods();
      }, []);

    const fetchFoods = async () => {
        await axios.get("http://127.0.0.1:8000/api/food").then(({data}) =>{
            getFoods(data);
        })
    }

    const buttonSwal = async (foodData) => {
        Swal.fire({
            title : `รายละเอียดของ ${foodData.name}`,
            width: "600",
            html : `
                <div className="card p-0">
                    <img className="card-img-top" style="width: 500px" src="${foodData.image}" alt="${foodData.name}" />
                    <div className="card-body">
                        <br />
                        <div style="background-color: E3E3E3; height: 120px" className="card-body p-3 mb-4">
                            <p className="card-text>${foodData.description}</p>
                        </div>
                        <p className="card-footer mt-3">ราคา ${Number(foodData.price)} บาท</p>
                    </div>
                </div>
            `,
            showCancelButton: true,
            cancelButtonText: "ย้อนกลับ",
            cancelButtonColor : "#d33",
            confirmButtonText : "สั่งอาหาร"
        }).then((result) => {
            if(result.isConfirmed){
                Swal.fire({
                    icon: 'success',
                    text: "สั่งอาหารเรียบร้อย",
                    timer: 1400,
                    showConfirmButton: false
                });
            }
        })
    }

    return (
        <div className='container'>
            <div className="row mb-5">
                <div className='col-4'></div>
                <h1 className='col-4 text-center'>รายการอาหาร</h1>
                <div className='col-4'>
                    <Link className='btn btn-primary float-end mt-2' to={"/food/create"}>
                        New Food
                    </Link>
                </div>
                
            </div>
            
            <div className='row' style={{gap: "2rem"}}>
                
                {foodLists.length>0 ? (
                    foodLists.map((row, key) => (
                        <div key={key} className="card p-0" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={row.image} alt={row.name} />
                            <div className="card-body">
                                <h5 className="card-title">{row.name}</h5>
                                <p className="card-text">{row.description.length>32?`${row.description.substring(0, 32)}...`:row.description}</p>
                                <Button onClick={() => buttonSwal(row)} className="btn btn-primary">รายละเอียดเพิ่มเติม</Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>ไม่มีรายการอาหารในระบบ</p>
                )}
            </div>
        </div>
    )
}

export default FoodList