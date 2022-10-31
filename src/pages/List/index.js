import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';

import { getAllBeers } from '../../store/fetchActions'
import Beer from "../../components/Beer";


const List = () => {
    const beers = useSelector(state => state.beers)

    const dispatch = useDispatch()

    const handlePageClick = (data) => {
        let currentPage = data.selected + 1
        dispatch(getAllBeers(currentPage))
    }

    useEffect(() => {
        dispatch(getAllBeers())
    }, [dispatch])

    return (
        <div className="container-fluid">

            <div className="row">{beers.map((beer, index) => (<Beer key={index} beer={beer} />))}</div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                //page count fixo pq, possivelmente, o cors da api não está habilitado a fornecer o 'x-total-count'
                pageCount={13}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
}

export default List