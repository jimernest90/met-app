import React, { useState, useEffect, ChangeEvent } from "react";
import PaintingDataService from "../services/PaintingService";
import IPaintingData from '../types/Painting';

const PaintingsList: React.FC = () => {
  const [paintings, setPaintings] = useState<IPaintingData[]>([]);

  useEffect(() => {
    retrievePaintings();
  }, []);

  const retrievePaintings = () => {
    PaintingDataService.getAll()
      .then((response: any) => {
        setPaintings(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  return (
<></>
  );
};

export default PaintingsList;