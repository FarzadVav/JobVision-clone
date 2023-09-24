import SearchJobForm from "../components/SearchJobForm";
import JobsFiltersBar from "../components/FilterJob";

const Jobs = () => {
	return (
		<>
			<div className={`light-shadow w-full pt-9 pb-3`}>
				<div className={`wrapper`}>
					<SearchJobForm />
					<JobsFiltersBar />
				</div>
			</div>
			<div className={`wrapper mb-12 md:mb-16`}>
				<p className={`mt-12`}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique hic officiis excepturi repellendus distinctio dignissimos inventore facilis molestias eum accusantium voluptatibus mollitia, nulla iure laboriosam adipisci ratione alias itaque architecto dolorum quaerat cupiditate rerum perferendis? Accusantium, et. Recusandae sint ipsum vitae dolorum repellendus! Eveniet soluta id, cumque nisi repellat quas dolorum. Similique tempora dolor iure officia eius saepe, nisi, non, doloremque repellat magni facere. Quidem expedita deserunt repellendus aperiam, voluptate eligendi deleniti odit debitis voluptatem, tenetur voluptates labore nam? Illo est nam quos, iste dolor placeat. Aspernatur facilis et neque doloribus magni repellendus, fuga, repudiandae laudantium voluptatem necessitatibus qui iste?
				</p>
			</div>
		</>
	);
};

export default Jobs;