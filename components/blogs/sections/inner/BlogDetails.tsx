

function BlogDetails({ blog }: { blog: any }) {
  const { title, date, data } = blog;

  // Ensure content is a string
  const htmlContent = typeof data === 'string' ? data : '';

  return (
    <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 px-2 sm:px-4 lg:px-10 max-w-[1200px] mx-auto">
      <style>{`
                .blog-content {
                    font-family: var(--font-open-sans), sans-serif;
                    line-height: 1.7;
                }
                .blog-content h1 {
                    font-family: var(--font-montserrat), sans-serif;
                    font-weight: 700;
                    font-size: 28px;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    color: #000000;
                }
                .blog-content h2 {
                    font-family: var(--font-montserrat), sans-serif;
                    font-weight: 700;
                    font-size: 18px;
                    margin-top: 24px;
                    margin-bottom: 12px;
                    color: #000000;
                }
                .blog-content p {
                    font-family: var(--font-open-sans), sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    margin-bottom: 12px;
                    color: #000000;
                    line-height: 1.7;
                }
                .blog-content ul {
                    list-style: none;
                    padding-left: 0;
                    margin-bottom: 12px;
                }
                .blog-content li {
                    display: flex;
                    align-items: center;
                    margin-bottom: 6px;
                }
                .blog-content span {
                    font-family: var(--font-open-sans), sans-serif;
                }

                @media (min-width: 640px) {
                    .blog-content h1 {
                        font-size: 32px;
                        margin-bottom: 22px;
                    }
                    .blog-content h2 {
                        font-size: 19px;
                        margin-top: 28px;
                        margin-bottom: 14px;
                    }
                    .blog-content p {
                        font-size: 15px;
                        margin-bottom: 14px;
                    }
                }

                @media (min-width: 768px) {
                    .blog-content h1 {
                        font-size: 36px;
                        margin-bottom: 23px;
                    }
                    .blog-content h2 {
                        font-size: 19.5px;
                        margin-top: 30px;
                        margin-bottom: 15px;
                    }
                    .blog-content p {
                        font-size: 15.5px;
                        margin-bottom: 15px;
                    }
                }

                @media (min-width: 1280px) {
                    .blog-content h1 {
                        font-size: 40px;
                        margin-bottom: 24px;
                    }
                    .blog-content h2 {
                        font-size: 20px;
                        margin-top: 32px;
                        margin-bottom: 16px;
                    }
                    .blog-content p {
                        font-size: 16px;
                        margin-bottom: 16px;
                    }
                }
            `}</style>
      <p className="font-[400] text-[14px] sm:text-[15px] xl:text-[16px] text-[#535353] font-open-sans">{date}</p>
      <h1 className="font-[700] text-[20px] sm:text-[21px] md:text-[22px] lg:text-[23px] xl:text-[40px] text-[#000000] font-montserrat leading-tight sm:leading-snug md:leading-normal">{title}</h1>
      {htmlContent && (
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      )}
    </div>
  )
}
export default BlogDetails;