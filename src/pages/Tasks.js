import React, { useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export const Tasks = () => {
    const params = useParams();
    console.log("param",params)
    const [Tasks, setTasks] = useState([]);
    let url=process.env.REACT_APP_REST_URL+"tasks/";
    useEffect(() => {

                    axios.get(url).then((resp) => {
                        setTasks(resp.data);
                        console.log("else statament",resp.data);
                })
        }, [setTasks],[]);
    return (
        <div>
            <table className="table table-striped">
                <thead>
                <tr className="table-light">
                    <th>id</th>
                    <th>name</th>
                    <th>comment</th>
                    <th>create</th>
                    <th>update</th>
                </tr>
                </thead>
                <tbody className="table table-striped">
                {
                    Tasks.map((TskLst) =>
                        <tr key={TskLst.id} className="table-light" >
                            <td>{TskLst.id}</td>
                            <td><a href={"/tasks/"+TskLst.id}>{TskLst.name}</a></td>
                            <td>{TskLst.comment}</td>
                            <td>{TskLst.create_Timestamp}</td>
                            <td>{TskLst.update_Timestamp}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}