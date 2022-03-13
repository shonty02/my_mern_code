import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";
import {Button, Container} from '@mui/material';

const TeamDashboard = () => {

    const [teamCreated, setTeamCreated] = useState(true);
    const [team, setTeam] = useState("");
    const [newteamList, setNewTeamList] = useState([
      // { text: "Kon sa exam hai kal", sent: true },
      // { text: "Compiler Designer, syllabus batao iska", sent: false },
      // { text: "kal pata chalega jab exam denge 😎😎", sent: true },
      // { text: "bye bye Good Night!!", sent: true },
    ]);
  
    useEffect(() => {
      newteam.connect();
    }, []);
  
    // subscribing the event
    team.on("recnewteam", (data) => {
      console.log(data);
      setNewTeamList([...newteamList, data]);
    });

    const newTeam = () => {
        let obj = { text: newteam, sent: true };
        newteam.emit("addteam", obj);
    
        setNewTeam([...newTeamList, obj]);
        setNewTeam("");
      };

        return (
            <div className="container">
              <Container>
                 <div className="chat-area">{TeamDashboard()}</div>
                 <div className="chat-area">{newTeam()}</div>


                <div className="input-group">
                  <input
                   className="form-control"
                   placeholder="Enter Team Name Here..."
                   onChange={(e) => teamDashboard(e.target.value)}
                   value={teamDashboard}
                  />
                    
                  <Button variant="contained" onClick={teamDashboard}>
                    AddTeam &nbsp; <i className="fas fa-paper-plane"></i>
                  </Button>
                </div>
            
                
              </Container>
            </div>
        )
    }






export default TeamDashboard;