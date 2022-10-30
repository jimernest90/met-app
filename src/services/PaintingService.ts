import http from "../http-common";
import IPaintingData from "../types/Painting";

const getAll = () => {
  return http.get<Array<IPaintingData>>("/objects");
};
const get = (id: any) => {
    return http.get<IPaintingData>(`/objects/${id}`)
}
  
const PaintingService = {
    getAll,
    get,
  };

export default PaintingService;