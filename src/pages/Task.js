import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export const Task = () => {
    const params = useParams();
    console.log(params);
    const [Task, setTask] = useState([]);
    const [Messages, setMessages] = useState([]);
    const url = process.env.REACT_APP_REST_URL;
    useEffect(() => {
        axios.get(url+"tasks/?id="+params.id).then((resp) => {
            setTask(resp.data);
            console.log("log",resp.data)
        });
    }, [setTask],[]);
    useEffect(() => {
        axios.get(url+"messages/?task="+params.id).then((resp) => {
            setMessages(resp.data);
            console.log(resp.data)
        });
    }, [setMessages],[]);
    return (
        <div>
            <h1>{Task.name}</h1>
            <h2>{Task.comment}</h2>
            <h3>{Task.create_Timestamp}</h3>
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
                    Messages.map((MsgsLst) =>
                        <tr key={MsgsLst.id} className="table-light" >
                                <td>{MsgsLst.id}</td>
                                <td><a href={"/tasks/?id="+MsgsLst.id}>{MsgsLst.name}</a></td>
                                <td>{MsgsLst.comment}</td>
                                <td>{MsgsLst.create_Timestamp}</td>
                                <td>{MsgsLst.update_Timestamp}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}