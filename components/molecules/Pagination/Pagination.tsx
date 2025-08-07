import React from "react";
import PaginationTemplate from "./PaginationTemplate";
import { PaginationProps } from "@/types";
import { getPageItems } from "@/lib/utils";

const Pagination: React.FC<PaginationProps> = ({
  totalPageCount,
  currentPage,
  setCurrentPage,
}) => {
  const handleNextPageChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (currentPage < totalPageCount) setCurrentPage(currentPage + 1);
  };

  const handlePrevPageChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPageCount;

  const pageItems = getPageItems(currentPage, totalPageCount);

  return (
    <PaginationTemplate
      totalPageCount={totalPageCount}
      handleNextPageChange={handleNextPageChange}
      handlePreviousPageChange={handlePrevPageChange}
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      isPrevDisabled={isPrevDisabled}
      isNextDisabled={isNextDisabled}
      pageItems={pageItems}
    />
  );
};

export default Pagination;
