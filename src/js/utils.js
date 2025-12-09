import { PointType } from "./data"

export const getPointColorByType = (point_type) => {
    switch (point_type) {
        case PointType.WATER:
            return "blue";
        case PointType.TOILET:
            return "cyan";
        case PointType.FOOD:
            return "yellow";
        case PointType.TRASH:
            return "red";
        default:
            return "red";
    }
}

