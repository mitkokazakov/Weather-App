export const getLongitudeAndLatitude = async () => {
  const position = await getLocation();

  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude, // ✅ correct spelling
  };
};

const getLocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
};