<section className="details container">
          <div className="info-container">
            <h1>{details?.result?.name}</h1>
            <div className="d-flex align-items-center">
              <p>
                <span>
                  {details?.result?.rating
                    ? details?.result?.rating
                    : "0"}
                </span>{" "}
                Rating
              </p>
              <h5 className="ml-3">
                <AiOutlineExclamationCircle /> User Ratings Total:{" "}
                {details?.result?.user_ratings_total
                  ? details?.result?.user_ratings_total
                  : "0"}
              </h5>
              <p className="ml-3">
                <AiFillSafetyCertificate /> Category:{" "}
                {details?.result?.types.toString()}
              </p>
            </div>
            <div className=" mt-2">
              <h5>
                <FaAddressCard style={{ fontSize: 20 }} /> Address:{" "}
                {details?.result?.formatted_address}
              </h5>
              {/* <h5 className="ml-3">
                <FaMapMarkerAlt /> Vicinity: {details?.result?.vicinity}
              </h5> */}
            </div>
            <div>
              <h5 className="mt-1">
                <FiPhoneCall /> Phone #:{" "}
                {details?.result?.formatted_phone_number}
              </h5>
              <h5 className="mt-1">
                <BiPhoneCall />
                Int. Phone #:{" "}
                {details?.result?.international_phone_number}
              </h5>
            </div>
            <div>
              {/* <ReactStars
                count={5}
                // onChange={ratingChanged}
                value={details?.result?.rating}
                size={30}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                edit={false}
              /> */}
            </div>
            <div className="mt-3">
              {details?.result?.opening_hours.open_now && (
                <span id="open_now">Open Now</span>
              )}
              {details?.result?.opening_hours.open_now == false ? (
                <span id="close_now">Closed</span>
              ) : (
                ""
              )}
            </div>
            <div className="tabs-content mt-5">
              <Tabs>
                <TabList>
                  <Tab>
                    <FaBookOpen style={{ fontSize: 20, marginRight: 5 }} />{" "}
                    Information
                  </Tab>
                  {/* <Tab>
                    <MdPhotoCamera style={{ fontSize: 20 }} /> Photos
                  </Tab>
                  <Tab>
                    <FaUsersCog style={{ fontSize: 20 }} /> Services
                  </Tab> */}
                  <Tab>
                    <AiOutlineStar style={{ fontSize: 20 }} /> Write a Review
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="mt-4 description">
                    <div>
                      <h2>About the Business</h2>
                      <h5>
                        <strong>N/A</strong>
                      </h5>
                      {/* <p className="mt-1">Established in 1989.</p>
                      <article>
                        The University of San Francisco Department of
                        Recreational Sports is proud to present the Koret health
                        and Recreation Center. This state of the art facility
                        was developed by the University of San Francisco in
                        collaboration with alumni, special donors and the Koret
                        Foundation. Since its opening in 1989, the Koret Center
                        has provided an outstanding recreational and fitness
                        environment for USF students, faculty, staff, alumni and
                        members.
                      </article> */}
                    </div>
                    <hr />
                    <div>
                      <h2>Amenities and More</h2>
                      <div className="amenities">
                        <div className="amenities-content">
                          <AiOutlineCheck
                            style={{ fontSize: 20 }}
                            className="mr-2"
                          />
                          <span>Good For Kids</span>
                        </div>
                        <div className="amenities-content">
                          <FaParking
                            style={{ fontSize: 20 }}
                            className="mr-2"
                          />
                          <span>Street Parking, Private Lot Parking</span>
                        </div>
                        <div className="amenities-content">
                          <RiBikeLine
                            style={{ fontSize: 20 }}
                            className="mr-2"
                          />
                          <span>Bike Parking</span>
                        </div>
                        <div className="amenities-content">
                          <FaTransgenderAlt
                            style={{ fontSize: 20 }}
                            className="mr-2"
                          />
                          <span>Gender-neutral restrooms</span>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h2>Working Hours</h2>
                      {
                        //   console.log(details?.result?.opening_hours.periods)
                        details?.result?.opening_hours.weekday_text.map(
                          (item) => (
                            <li>{item}</li>
                          )
                        )
                      }
                    </div>

                    <hr />
                    <div>
                      <h2>Recommended Reviews</h2>
                      <div>
                        {details?.result?.reviews ? (
                          <Reviews data={details} />
                        ) : (
                          <h5>No Reviews</h5>
                        )}
                      </div>

                      {/* <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={30}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      /> */}
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div>
                    <CommentComponent />
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className="mini-sidebar">
            <DetailsSidebar data={details} />
          </div>
        </section>