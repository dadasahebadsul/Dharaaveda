import React, { useEffect, useState } from "react";
import { Star, Quote, ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../lib/api";
import type { Testimonial, ScreenshotReview } from "../types";
import {TESTIMONIAL_TOPICS,type TestimonialTopic,} from "../data/testimonialTopics";

export default function Testimonials() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [screenshotReviews, setScreenshotReviews] = useState<ScreenshotReview[]>([]);

  const topicFromUrl = searchParams.get("topic");

  const [selectedTopic, setSelectedTopic] = useState(
    topicFromUrl &&
    TESTIMONIAL_TOPICS.includes(topicFromUrl as TestimonialTopic)
      ? topicFromUrl
      : "All"
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadTestimonials() {
      try {
        const [data, reviews] = await Promise.all([
          api.getTestimonials(),
          api.getScreenshotReviews(),
        ]);

        setTestimonials(
          data.filter(
            (test) =>
              test.type === "wellness" &&
              (test.approved === undefined || test.approved === true)
          )
        );

        setScreenshotReviews(reviews);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      } finally {
        setLoading(false);
      }
    }

    loadTestimonials();
  }, []);

const filteredScreenshotReviews =
  selectedTopic === "All"
    ? screenshotReviews
    : screenshotReviews.filter(
        (review) => review.topic === selectedTopic
      );

  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">

        {/* Back */}
        <button
          onClick={() => navigate("/wellness")}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-therapy-600 font-bold mb-4">
            Testimonials
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 tracking-wide">
            Patient Testimonials
          </h1>

          <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
            Hear from people who have experienced our wellness therapies.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16 text-sm text-gray-500">
            Loading testimonials...
          </div>
        )}

        {/* Empty */}
        {!loading && testimonials.length === 0 && (
          <div className="text-center py-16 text-sm text-gray-500">
            No testimonials available.
          </div>
        )}

        {/* Testimonials */}
        {/* Screenshot Reviews */}
        {!loading && screenshotReviews.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-therapy-600 font-bold">
                Patient Stories
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mt-2">
                Real Patient Experiences
              </h2>
            </div>

            {/* Filter by Topic */}
                <div className="mb-8 max-w-md">
                  <label
                    htmlFor="testimonial-topic"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Filter by Topic
                  </label>

                  <select
                    id="testimonial-topic"
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition-all focus:border-therapy-500 focus:ring-2 focus:ring-therapy-500/20"
                  >
                    {TESTIMONIAL_TOPICS.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScreenshotReviews.length === 0 ? (
                <div className="col-span-full text-center py-12 text-gray-500">
                  No patient stories found for this topic.
                </div>
              ) : (
                filteredScreenshotReviews.map((review) => (
                  <article
                    key={review.id}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
                      <img
                        src={`http://localhost:3000${review.imageUrl}`}
                        alt={review.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-5">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {review.caption}
                      </p>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}