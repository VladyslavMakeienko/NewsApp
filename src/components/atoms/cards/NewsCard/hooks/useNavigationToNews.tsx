import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes/routing";

export const useNavigationToNews = () => {
  const navigate = useNavigate();

  const navigateToSpecificNews = (id: string) => {
    navigate(`${ROUTES.DETAILS}/${id}`);
  };

  return {
    navigateToSpecificNews,
  };
};
