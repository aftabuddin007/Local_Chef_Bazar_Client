import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MealCard from '../../Components/MealCard/MealCard';
import MealCardSkeleton from '../../Components/MealSkeleton/MealSheleton';
import useAxiosSecure from '../../Contexts/AuthContext/useAxiosSecure';

const Meals = () => {
  const axiosSecure = useAxiosSecure();

  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState('');
  const [rating, setRating] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;

  // 🔹 Meals Query
  const { data: meals = [], isLoading } = useQuery({
    queryKey: [
      'meals',
      searchText,
      sort,
      rating,
      deliveryArea,
      currentPage
    ],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/meals?search=${searchText}&sort=${sort}&rating=${rating}&deliveryArea=${deliveryArea}&limit=${itemsPerPage}&skip=${currentPage * itemsPerPage}`
      );
      return res.data;
    }
  });

  // 🔹 Count Query (for pagination)
  const { data: countData = {} } = useQuery({
    queryKey: ['meals-count', searchText, rating, deliveryArea],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/meals-count?search=${searchText}&rating=${rating}&deliveryArea=${deliveryArea}`
      );
      return res.data;
    }
  });

  const totalPages = Math.ceil((countData.count || 0) / itemsPerPage);

  // 🔹 Search Handler
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value.trim();
    setSearchText(text);
    setCurrentPage(0);
  };

  return (
    <div className="bg-[#FFF8F0]">
      <title>LocalChefBazar All Meals</title>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center py-10">All Meals</h2>

        {/* 🔍 Search + Filters */}
        <div className="flex flex-wrap gap-4 justify-between px-10 mb-8">

          {/* Search */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              name="search"
              type="search"
              required
              placeholder="Search meal or chef"
              className="input input-bordered"
            />
            <button className="btn">Search</button>
          </form>

          {/* Rating */}
          <select
            className="select select-bordered"
            onChange={(e) => {
              setRating(e.target.value);
              setCurrentPage(0);
            }}
          >
            <option value="">All Ratings</option>
            <option value="3">3+ Star</option>
            <option value="4">4+ Star</option>
            <option value="5">5 Star</option>
          </select>

          {/* Delivery Area */}
          <select
            className="select select-bordered"
            onChange={(e) => {
              setDeliveryArea(e.target.value);
              setCurrentPage(0);
            }}
          >
            <option value="">All Areas</option>
            <option value="Uttara, Dhaka">Uttara, Dhaka</option>
            <option value="Dhanmondi, Dhaka">Dhanmondi, Dhaka</option>
            <option value="Mirpur, Dhaka">Mirpur, Dhaka</option>
          </select>

          {/* Sort */}
          <select
            className="select select-bordered"
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(0);
            }}
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>
        </div>

        {/* 🧾 Meals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 mb-20">
          {isLoading &&
            Array.from({ length: itemsPerPage }).map((_, index) => (
              <MealCardSkeleton key={index} />
            ))}

          {!isLoading &&
            meals.map(food => (
              <MealCard key={food._id} food={food} />
            ))}
        </div>

        {/* 📄 Pagination */}
        <div className="flex justify-center gap-2 mb-20">
          {[...Array(totalPages).keys()].map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`btn btn-sm ${
                currentPage === page ? 'btn-primary' : 'btn-outline'
              }`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;
