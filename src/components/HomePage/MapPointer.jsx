import { useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MapPin } from "lucide-react";
import { renderToString } from "react-dom/server";
import { getPointColorByType } from "../../js/utils";
import { useNavigate } from "react-router-dom";

export default function MapPointer({ points }) {
  const map = useMap();
  const center = map.getCenter();
  const distance = (a, b) => map.distance(a, b);
  const navigate = useNavigate();

  // Function to create a Leaflet div icon for a given point type
  const createMapPinIcon = (pointType) => {
    const fill = getPointColorByType(pointType);
    const html = renderToString(
      <MapPin size={36} color="white" fill={fill} strokeWidth={2} />
    );

    return L.divIcon({
      html,
      className: "",
      iconSize: [28, 28],
      iconAnchor: [14, 28],
    });
  };

  return (
    <>
      {points.map((p) => {
        const dist = distance(center, p.position);

        if (dist <= p.radius) {
          return (
              <Marker
                position={p.position}
                icon={createMapPinIcon(p.type)}
                eventHandlers={{
                  click: () => {
                    navigate("/details/" + p.id, { state: { distance: dist}});
                  },
                }}
              >
            </Marker>

          );
        }

        return null;
      })}
    </>
  );
}
