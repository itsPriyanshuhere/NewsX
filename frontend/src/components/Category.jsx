import sportsnew from '../assets/sportsnew.jpeg';

const Category = () => {
  return (
    <div className="p-16">
      <h2 className="text-4xl font-serif text-gray-200 pt-0">
        Top<span className="text-red-500"> Categories</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {[
          {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqeuAPkpP-NNW0_LN1say6pOY13P9UfuGZFw&usqp=CAU',
            title: 'Category 1',
          },
          {
            image:
              'https://www.hindustantimes.com/ht-img/img/2023/06/28/1600x900/IMG-20230628-WA0001_1687930344914_1687930353678.jpg',
            title: 'Category 2',
          },
          {
            image: sportsnew,
            title: 'Category 3',
          },
          {
            image:
              'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11494090.jpg',
            title: 'Category 4',
          },
        ].map((category, index) => (
          <div
            key={index}
            className="relative overflow-hidden w-82 transform transition-transform duration-300 hover:scale-105 hover:rotate-1"
          >
            <img
        src={category.image}
        alt={category.title}
        className="w-64 h-64 rounded-full border-4 border-red-500 shadow-lg"
      />
            <div className="absolute inset-0 flex flex-col justify-end">
              <div className="bg-white p-4 text-black rounded-b-lg">
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
