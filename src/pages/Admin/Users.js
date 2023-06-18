import React , { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";



const Users = () => {
  const [users, setUsers] = useState([]);

  //getall products
  const getAllUsers= async () => {
    try {
      const { data } = await axios.get("/api/v1/user/users");
      setUsers(data.users);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllUsers();
  }, []);
  
  return (
    <Layout title={"Dashboard - All Users"}>
      
      
        <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Users</h1>
          <div className="d-flex flex-wrap">
            {users?.map((p) => (
            
                <div className="card m-2" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">NAME:  {p.name}</h5>
                    <p className="card-text">  Email: {p.email}</p>
                    <p className="card-text">  Phone Number:  {p.phone}</p>
                    <p className="card-text">  Address:  {p.address}</p>
                    
                  </div>
                </div>
            
            ))}
          </div>
        
        </div>
      </div>
    
    </Layout>
  );
};

export default Users;
