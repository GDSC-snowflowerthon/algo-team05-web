import { useEffect } from "react";
import PropTypes from "prop-types";

/*
export const Map = styled.div`
  width: 80%;
  max-height: 276px;
  height: 276px;
  border-radius: 16px;
  background-color: #cdcdcd;
  margin-bottom: 20px;
  margin-top: 40px;
`;
*/

export default function Map() {
  /* kakao maps api를 심어서 가져오면 window 전역 객체에 들어가게 된다. 
    그런데 함수형 컴포넌트에서는 이를 바로 인식하지 못 하기 때문에, 아래 코드를
    작성하여 함수형 컴포넌트에 인지 시키고 window에서 kakao 객체를 뽑아서 사용하는 것이다. */

  const { kakao } = window;

  // useEffect로 지도를 가지고 있는 컴포넌트가 처음 렌더링 될 때 지도를 띄우기 위함.
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch("제주시 명월성로 5", placesSearchCB);

    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      console.log(map);

      // 마커를 클릭하면 장소명이 인포윈도우에 표출
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;">' +
          place.place_name +
          "</div>"
      );

      // 마커에 클릭이벤트를 등록
      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "80%",
        maxHeight: "276px",
        height: "276px",
        borderRadius: "16px",
        backgroundColor: "#cdcdcd",
        marginBottom: "20px",
        marginTop: "40px",
      }}
    ></div>
  );
}

Map.propTypes = {
  setX: PropTypes.func.isRequired,
  setY: PropTypes.func.isRequired,
};
