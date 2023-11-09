import { useEffect, useState } from "react";

import { SalaryInput, Title } from "../components/salary";
import BarChart from "../../utils/barchart";

export default function Salaries() {
  const [loading, setLoading] = useState(false);
  const [salaryInput, setSalaryInput] = useState({
    jobTitle: "",
    location: "",
    radius: "",
  });
  const [salaryData, setSalaryData] = useState([]);

  const rapid_api = process.env.NEXT_PUBLIC_RAPID_API_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapid_api,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchGeoLocation = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;
      fetch(geoApiUrl)
        .then((response) => response.json())
        .then((data) => {
          fetch(
            `https://jsearch.p.rapidapi.com/estimated-salary?job_title=NodeJS%20Developer&location=${data?.countryCode}&radius=100`,
            options
          )
            .then((response) => response.json())
            .then((response) => {
              setSalaryData(response.data);
              setSalaryInput({
                jobTitle: "Node JS Developer",
                location: data?.countryCode,
                radius: 100,
              });
            })
            .catch((err) => console.error(err));
          setLoading(false);
        });
    } catch (error) {}
  };

  const handleSearch = () => {
    if (
      salaryInput.jobTitle === "" ||
      salaryInput.location === "" ||
      salaryInput.radius === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    fetch(
      `https://jsearch.p.rapidapi.com/estimated-salary?job_title=${salaryInput.jobTitle}&location=${salaryInput.location}&radius=${salaryInput.radius}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSalaryData(response.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchGeoLocation();
  }, []);

  return (
    <main>
      <div
        className={`bg-[#FAFAFB] dark:bg-[#13131A] h-full md:h-screen py-16 md:py-20 md:flex md:gap-20 md:px-20 px-6`}
      >
        <div className="md:flex-col md:w-[50%]">
          <Title title="Estimated Salaries" />
          <div className="mt-8">
            <SalaryInput
              title="Job Title"
              salaryInput={salaryInput}
              setSalaryInput={setSalaryInput}
              field="jobTitle"
            />
            <div className="md:flex gap-14">
              <SalaryInput
                title="Location"
                salaryInput={salaryInput}
                setSalaryInput={setSalaryInput}
                field="location"
              />
              <SalaryInput
                title="Radius"
                salaryInput={salaryInput}
                setSalaryInput={setSalaryInput}
                field="radius"
              />
            </div>
            <button
              className="bg-[#0BAB7C] w-full text-white py-4 rounded-lg md:px-8 mt-8"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="md:w-[50%] md:flex md:pt-12 max-h-96 mt-8 md:mt-16">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BarChart salaryData={salaryData} salaryInput={salaryInput} />
          )}
        </div>
      </div>
    </main>
  );
}
