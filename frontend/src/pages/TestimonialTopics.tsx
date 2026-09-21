import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Activity,
  Brain,
  Heart,
  Flame,
  Moon,
  Target,
  ShieldAlert,
  Users,
  GraduationCap,
  Sparkles,
  Wind,
  Smile,
  Frown,
  CircleAlert,
  Stethoscope,
  Dumbbell,
  BookOpen,
  Star,
  Zap,
} from "lucide-react";
import { TESTIMONIAL_TOPICS } from "../data/testimonialTopics";

const getTopicIcon = (topic: string) => {
  const value = topic.toLowerCase();

  if (
    value.includes("stress") ||
    value.includes("pressure") ||
    value.includes("exhaustion") ||
    value.includes("overtired")
  ) {
    return Activity;
  }

  if (
    value.includes("anger") ||
    value.includes("aggression") ||
    value.includes("shouting") ||
    value.includes("bitterness")
  ) {
    return Flame;
  }

  if (
    value.includes("sleep") ||
    value.includes("insomnia")
  ) {
    return Moon;
  }

  if (
    value.includes("anxiety") ||
    value.includes("fear") ||
    value.includes("panic") ||
    value.includes("phobia")
  ) {
    return ShieldAlert;
  }

  if (
    value.includes("depression") ||
    value.includes("sadness") ||
    value.includes("grief") ||
    value.includes("crying")
  ) {
    return Frown;
  }

  if (
    value.includes("emotion") ||
    value.includes("emotional") ||
    value.includes("happiness") ||
    value.includes("confidence") ||
    value.includes("shame") ||
    value.includes("guilt")
  ) {
    return Heart;
  }

  if (
    value.includes("concentration") ||
    value.includes("attention") ||
    value.includes("adhd") ||
    value.includes("studies")
  ) {
    return Target;
  }

  if (
    value.includes("autism") ||
    value.includes("dementia") ||
    value.includes("mental") ||
    value.includes("behavior")
  ) {
    return Brain;
  }

  if (
    value.includes("relationship") ||
    value.includes("connection") ||
    value.includes("affair")
  ) {
    return Users;
  }

  if (
    value.includes("course") ||
    value.includes("training") ||
    value.includes("improve")
  ) {
    return GraduationCap;
  }

  if (
    value.includes("pain") ||
    value.includes("ache") ||
    value.includes("arthritis") ||
    value.includes("surgery") ||
    value.includes("operation") ||
    value.includes("cartilage")
  ) {
    return Stethoscope;
  }

  if (
    value.includes("cold") ||
    value.includes("breathing") ||
    value.includes("sneezing") ||
    value.includes("running nose")
  ) {
    return Wind;
  }

  if (
    value.includes("diabetes") ||
    value.includes("blood sugar") ||
    value.includes("thyroid") ||
    value.includes("kidney") ||
    value.includes("epilepsy")
  ) {
    return Activity;
  }

  if (
    value.includes("medicine") ||
    value.includes("remedy") ||
    value.includes("treatment") ||
    value.includes("therapy")
  ) {
    return Sparkles;
  }

  if (
    value.includes("addiction") ||
    value.includes("screen")
  ) {
    return Zap;
  }

  if (
    value.includes("calm") ||
    value.includes("patience") ||
    value.includes("positive") ||
    value.includes("grateful")
  ) {
    return Smile;
  }

  if (
    value.includes("weight") ||
    value.includes("physical") ||
    value.includes("body")
  ) {
    return Dumbbell;
  }

  if (
    value.includes("quick") ||
    value.includes("alertness")
  ) {
    return Star;
  }

  if (
    value.includes("shock") ||
    value.includes("trauma") ||
    value.includes("trigger") ||
    value.includes("emergency")
  ) {
    return CircleAlert;
  }

  if (
    value.includes("remedies") ||
    value.includes("rescue")
  ) {
    return ShieldAlert;
  }

  if (
    value.includes("consultation") ||
    value.includes("medicine")
  ) {
    return BookOpen;
  }

  return Activity;
};

export default function TestimonialTopics() {
  const navigate = useNavigate();

  const topics = TESTIMONIAL_TOPICS.filter(
    (topic) => topic !== "All"
  );

  return (
    <section
      className="min-h-screen text-gray-900 bg-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/testimonial-bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20">

        {/* Back */}
        <button
          onClick={() => navigate("/wellness")}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Wellness
        </button>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-therapy-600 font-bold mb-4">
            Patient Stories
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 tracking-wide">
            Explore Patient Experiences
          </h1>

          <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
            Select a topic to explore patient testimonials and
            experiences related to that area.
          </p>
        </div>

        {/* Horizontal Topic Carousel */}
        <div className="relative">

          <div
            className="
              flex
              gap-6
              overflow-x-auto
              overflow-y-hidden
              pb-8
              px-2
              snap-x
              snap-mandatory
              scroll-smooth
              scrollbar-thin
              scrollbar-thumb-gray-300
              scrollbar-track-transparent
            "
          >
            {topics.map((topic, index) => {
              const Icon = getTopicIcon(topic);

              const iconStyles = [
                {
                  circle: "bg-purple-50 border-purple-200 group-hover:bg-purple-100 group-hover:border-purple-400",
                  icon: "text-purple-600 group-hover:text-purple-700",
                },
                {
                  circle: "bg-orange-50 border-orange-200 group-hover:bg-orange-100 group-hover:border-orange-400",
                  icon: "text-orange-600 group-hover:text-orange-700",
                },
                {
                  circle: "bg-amber-50 border-amber-200 group-hover:bg-amber-100 group-hover:border-amber-400",
                  icon: "text-amber-600 group-hover:text-amber-700",
                },
                {
                  circle: "bg-yellow-50 border-yellow-200 group-hover:bg-yellow-100 group-hover:border-yellow-400",
                  icon: "text-yellow-600 group-hover:text-yellow-700",
                },
                {
                  circle: "bg-green-50 border-green-200 group-hover:bg-green-100 group-hover:border-green-400",
                  icon: "text-green-600 group-hover:text-green-700",
                },
                {
                  circle: "bg-pink-50 border-pink-200 group-hover:bg-pink-100 group-hover:border-pink-400",
                  icon: "text-pink-600 group-hover:text-pink-700",
                },
                {
                  circle: "bg-blue-50 border-blue-200 group-hover:bg-blue-100 group-hover:border-blue-400",
                  icon: "text-blue-600 group-hover:text-blue-700",
                },
                {
                  circle: "bg-indigo-50 border-indigo-200 group-hover:bg-indigo-100 group-hover:border-indigo-400",
                  icon: "text-indigo-600 group-hover:text-indigo-700",
                },
              ];

              const style = iconStyles[index % iconStyles.length];

              return (
                <button
                  key={topic}
                  onClick={() =>
                    navigate(
                      `/testimonials?topic=${encodeURIComponent(topic)}`
                    )
                  }
                  className="
                    group
                    flex-shrink-0
                    w-28
                    sm:w-32
                    snap-start
                    text-center
                  "
                >
                  {/* Topic Symbol */}
                  <div
                    className={`
                      mx-auto
                      w-24
                      h-24
                      sm:w-28
                      sm:h-28
                      rounded-full
                      border-2
                      flex
                      items-center
                      justify-center
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:shadow-lg
                      group-hover:scale-110
                      relative
                      ${style.circle}
                    `}
                  >
                    <div
                      className="
                        absolute
                        inset-2
                        rounded-full
                        border
                        border-current
                        opacity-20
                      "
                    />

                    <Icon
                      className={`
                        relative
                        z-10
                        w-10
                        h-10
                        sm:w-12
                        sm:h-12
                        transition-all
                        duration-300
                        group-hover:scale-110
                        ${style.icon}
                      `}
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Topic Name */}
                  <p
                    className="
                      mt-4
                      text-xs
                      sm:text-sm
                      font-medium
                      text-gray-700
                      group-hover:text-therapy-600
                      transition-colors
                      leading-tight
                    "
                  >
                    {topic}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Horizontal Scroll Hint */}
          <div className="text-center mt-2">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
              ← Swipe or scroll to explore all topics →
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}