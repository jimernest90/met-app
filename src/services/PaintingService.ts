import http from "../http-common";
import IPaintingData from "../types/Painting";

const getAll = () => {
  return http.get<Array<IPaintingData>>("/objects");
};

export default PaintingService;