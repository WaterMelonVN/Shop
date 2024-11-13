import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImages } from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardChart from "@/components/admin-view/dashboard-chart";
import DashboardStatistical from "@/components/admin-view/dashboard-statistical";
import axios from "axios";

function AdminDashboard() {
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const dispatch = useDispatch();
    const { featureImageList } = useSelector((state) => state.commonFeature);

    function handleUploadFeatureImage() {
        dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
            if (data?.payload?.success) {
                dispatch(getFeatureImages());
                setImageFile(null);
                setUploadedImageUrl("");
            }
        });
    }

    useEffect(() => {
        dispatch(getFeatureImages());
    }, [dispatch]);

    return (
        <div>
            <main className="p-4 flex-1">
                <DashboardStatistical />
                <div className="my-6">
                    <DashboardChart title="Monthly Revenue" />
                </div>
                <div>
                    <ProductImageUpload
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                        uploadedImageUrl={uploadedImageUrl}
                        setUploadedImageUrl={setUploadedImageUrl}
                        setImageLoadingState={setImageLoadingState}
                        imageLoadingState={imageLoadingState}
                        isCustomStyling={true}
                    />
                    <Button
                        onClick={handleUploadFeatureImage}
                        className="mt-5 w-full"
                    >
                        Upload
                    </Button>
                    <div className="flex flex-col gap-4 mt-5">
                        {featureImageList && featureImageList.length > 0
                            ? featureImageList.map((featureImgItem, index) => (
                                  <div key={index} className="relative">
                                      <img
                                          src={featureImgItem.image}
                                          className="w-full h-[300px] object-cover rounded-t-lg"
                                          alt="Feature"
                                      />
                                  </div>
                              ))
                            : null}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdminDashboard;
