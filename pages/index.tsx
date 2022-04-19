import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

export const index = () => {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ut
        accusantium consequuntur modi voluptatum minus aliquam, vel voluptate!
        Repellendus alias porro quia quod molestiae distinctio eaque dolore,
        quidem nisi ea necessitatibus error velit neque nostrum eius doloremque
        ut impedit repudiandae inventore aspernatur! Molestias eum, voluptate
        repellat esse facilis porro commodi.
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-dark-500 flex-grow"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">Services</h6>
        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="lg:col-span-1 md:col-span-2 dark:bg-dark-200 p-2 rounded-lg bg-gray-200"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
