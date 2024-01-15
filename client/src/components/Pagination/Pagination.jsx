import './Pagination.css'

const Pagination = ({ page, totalPages, onPageChange }) => {
    return (
        <div >
            <button
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                className="paginationClick"
            >
                &#8249; {/* Flecha izquierda */}
            </button>
            <span className='numberPages'>
                {page} of {totalPages}
            </span>
            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
                className="paginationClick"
            >
                &#8250; {/* Flecha derecha */}
            </button>
        </div>
    );
};

export default Pagination;