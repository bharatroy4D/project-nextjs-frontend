import { Button } from "@/components/ui/button";
import { getMe } from "@/services/getMe";

const HomePage = async () => {
  const user = await getMe();
  console.log(user);
  return (
    <div className="flex gap-5 items-center justify-center pt-9">
      Hello Next js
      <Button>
        Click Me
      </Button>
    </div>
  );
};

export default HomePage;