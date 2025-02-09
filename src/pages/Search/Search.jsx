import "./Search.css";
import Button from "../../components/atoms/Button/Button";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/molecules/Loader/Loader";
import DataDetails from "../../components/molecules/DataDetails/DataDetails";
import { useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const { siteUrl } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(siteUrl || "");
  const { data, loading, error, fetchData, handleCancelReq, setLastUrl } =
    useFetch();

  useEffect(() => {
    if (siteUrl) {
      setPage(decodeURIComponent(siteUrl));
      fetchData(decodeURIComponent(siteUrl));
    }
  }, [siteUrl]);

  useEffect(() => {
    if (data) console.log("Data updated:", data);
  }, [data]);

  const handleCancel = () => {
    handleCancelReq();
    console.log("Cancel");
    setPage("");
    setLastUrl(null);
    navigate("/search");
  };

  const handleFetch = (e) => {
    e.preventDefault();
    if (!page) return;
    navigate(`/search/${encodeURIComponent(page)}`);
  };

  return (
    <>
      <section className="search">
        <form className="search-form" onSubmit={handleFetch}>
          <input
            type="text"
            value={page}
            onChange={(e) => setPage(e.target.value)}
            className="search-input"
            placeholder="Enter your website URL..."
          />
          <div className="buttons-container">
            <Button
              type="button"
              className="button cancel"
              func={handleCancel}
              text="Cancel"
            />
            <Button className="button" type="submit" text="Let´s go!" />
          </div>
        </form>
        {loading && <Loader />}
        {error || data?.error ? (
          <p className="text-error">Error: {error || data?.error}</p>
        ) : (
          data && <DataDetails data={data} />
        )}
      </section>
    </>
  );
};

export default Search;
