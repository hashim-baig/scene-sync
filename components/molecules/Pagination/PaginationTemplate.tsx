import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {Button} from "@/components/ui/button";
import {PaginationTemplateProps} from "@/types";

const PaginationTemplate: React.FC<PaginationTemplateProps> = ({
                                                                 handleNextPageChange,
                                                                 handlePreviousPageChange,
                                                                   handlePageChange,
                                                                 currentPage,
                                                                  isPrevDisabled,
                                                                  isNextDisabled,
                                                                    pageItems,
}) => {
  return (
      <section className="pb-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                  variant="ghost"
                  asChild
                  aria-disabled={isPrevDisabled}
                  tabIndex={isPrevDisabled ? -1 : undefined}
                  className={isPrevDisabled ? "pointer-events-none opacity-50" : ""}
                  onClick={e => {
                    if (isPrevDisabled) {
                      e.preventDefault();
                      return;
                    }
                    handlePreviousPageChange(e);
                  }}
              >
                <PaginationPrevious href="#" />
              </Button>
            </PaginationItem>

              {pageItems.map((item, idx) => {
                  if (item === "ellipsis") {
                      return (
                          <PaginationItem key={"ellipsis-" + idx}>
                              <PaginationEllipsis />
                          </PaginationItem>
                      );
                  }

                  return (
                      <PaginationItem key={item}>
                          <Button
                              variant={item === currentPage ? "outline" : "ghost"}
                              asChild
                              className={item > 10000 ? "w-12 text-center truncate" : ""}
                          >
                              <PaginationLink
                                  href="#"
                                  isActive={item === currentPage}
                                  onClick={(e) => {
                                      e.preventDefault();
                                      if (item !== currentPage) handlePageChange(item);
                                  }}
                              >
                                  {item}
                              </PaginationLink>
                          </Button>
                      </PaginationItem>
                  );
              })}

              <PaginationItem>
                  <Button
                      variant="ghost"
                      asChild
                      aria-disabled={isNextDisabled}
                      tabIndex={isNextDisabled ? -1 : undefined}
                      className={isNextDisabled ? "pointer-events-none opacity-50" : ""}
                      onClick={e => {
                          if (isNextDisabled) {
                              e.preventDefault();
                              return;
                          }
                          handleNextPageChange(e);
                      }}
                  >
                      <PaginationNext href="#" />
                  </Button>
              </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
  );
};

export default PaginationTemplate;
