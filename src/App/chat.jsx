import SearchInput from '../../../features/search/searchInput';
import axios from 'axios';
import TextField from '../../shared/ui/textField/textField';
import useDebounce from '../../shared/lib/hooks/useDebounce/useDebounce';



const AcceptanceDocs = () => {
    const getGoods = async (value) => {
        const { data } = await axios.get(`http://localhost:3000/dreamkass/search?q=${encodeURI(value)}&limit=1000`);
        return data;
    };
    return (
        <>
            <h1>Нет документов</h1>
            <SearchInput searchFunction={getGoods} />
        </>
    );
};

export default AcceptanceDocs;


const SearchInput = ({ searchFunction }) => {
    const debounceSearch = useDebounce(searchFunction, 1000);
    const handleChange = (e) => {
        const { target } = e;
        debounceSearch(target.value);
    };

    return <TextField type={'text'} name={'searchText'} inputClass={'searchField'} onChange={handleChange} />;
};

export default SearchInput;
